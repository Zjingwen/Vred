/**
 * 图片组件, 上传,裁剪,模糊,自动裁剪
 * Created by zhengyun on 16/7/22.
 */

let template = require('./upload.html');
let cutImage = require('../cutImage/cutImage.js');

let upload = Vue.extend({
  template: template,
  data: function() {
    return {
      show: false, // 控制切图显示
      url: '',
      uploadStatus: '',
      cutStatus: false,
      jCropApi: null,
      coordinateLTX: '',
      coordinateLTY: '',
      coordinateRBX: '',
      coordinateRBY: '',
      coordinateW: '',
      coordinateH: '',
    };
  },
  props: {
    mid: {type: Number},
    type: {
      type: String,
      default: 'single',
    },
    image: {
      type: Object,
      default: function() {
        return {
          key: '',
          src: '',
        };
      },
    },
    opts: {
      type: Object,
      default: function() {
        return {
          cut: true,
          blur: true,
          transform: false,
          cover: false,
        };
      },
    },
    statu: {
      type: String,
    },
  },
  ready: function() {
    this.uploadImageInit();
  },
  computed: {
    // 一个计算属性的 getter
    class_: function() {
      // `this` 指向 vm 实例
      return this.type == 'single'?'single':'double';
    },
  },
  components: {
    'cutImage': cutImage,
  },
  methods: {
    uploadImageInit: function() {
      let vm = this;
      let id = 'image-upload-' + this.type + '-' + this.mid;
      let uploadHost = 'http://upload.lanlanlife.com';
      let imageFormData;
      if (this.opts.cover) {
        imageFormData = {
          imageKey: 'image',
          type: 'cover',
        };
      } else {
        imageFormData = {
          imageKey: 'image',
        };
      }

      $('#'+id).fileupload(
        {
          'url': uploadHost+'/writer/util/upload',
          'dataType': 'json',
          'sequentialUploads': true,
          'formData': imageFormData,
          'xhrFields': {withCredentials: true},
          'add': function(e, data) {
            vm.uploadStatus = '( 图片上传中... )';
            data.submit();
          },
        }
      ).bind('fileuploaddone', function(e, data) {
        let json = data.result;
        vm.uploadStatus = '(完成)';
        if (json == null) {

        } else {
          let code = json.status.code;
          if (code == 1001) {
            vm.image.src = json.result.src;
            vm.image.key = json.result.key;
          } else {
            alert(json.status.msg);
          }
        }
      });
    },
    imageCutBlurInit: function() {
      let self = this;
      // //var coordinateLTX,coordinateLTY,coordinateRBX,coordinateRBY,coordinateW,coordinateH;
      // var obj = {};
      let imgId = 'cut-image-'+ this.type + '-' + this.mid;

      function showCoords(c) {
        self.coordinateLTX = c.x;
        self.coordinateLTY = c.y;
        self.coordinateRBX = c.x2;
        self.coordinateRBY = c.x2;
        self.coordinateW = c.w;
        self.coordinateH = c.h;
      }

      $('#'+imgId).Jcrop({
        onChange: showCoords,
        onSelect: showCoords,
        boxWidth: 750,
        boxHeight: 0,
      }, function() {
        self.jCropApi = this;
      });

      // self.jCropApi.setImage(self.image.src);
    },
    transformImageInit: function() {
      let self = this;
      let imageObj1, imageObj2;
      // var coordinateLTX,coordinateLTY,coordinateW,coordinateH;
      if (this.statu == 'image2') {
        var itemsComponent = vm.$refs.doubleImageRef;
        imageObj1 = itemsComponent.double.images[0];
        imageObj2 = itemsComponent.double.images[1];
      } else {
        var itemsComponent = vm.$refs.itemsRef;
        imageObj1 = itemsComponent.image[0];
        imageObj2 = itemsComponent.image[1];
      }

      // var imageObj1 = itemsComponent.double.images[0],//vm.module[index[0]].images2[0],
      //     imageObj2 = itemsComponent.double.images[1];//vm.module[index[0]].images2[1];

      let _image = new Image();
      _image.src = imageObj1.src;
      let _img1W = _image.width;
      let _img1H = _image.height;

      _image.src = imageObj2.src;
      let _img2W = _image.width;
      let _img2H = _image.height;

      let rate1 = _img1W/_img1H;
      let rate2 = _img2W/_img2H;
      let w, h, x, y;
      // 裁剪第一张
      if (imageObj1.src === this.image.src) {
        // 宽度固定
        if (rate1 > rate2) {
          h = _img1H;
          w = h * rate2;
          x = (_img1W - w)/2;
          y = 0;
        }

        if (rate1 == rate2) {
          h = _img1H;
          w = _img1W;
          x = 0;
          y = 0;
        }
        // 宽度固定
        if (rate1 < rate2) {
          w = _img1W;
          h = w/rate2;
          x = 0;
          y = (_img1H - h)/2;
        }
      }
      // 裁剪第二张
      if (imageObj2.src === this.image.src) {
        // 宽度固定
        if (rate2 > rate1) {
          h = _img2H;
          w = h * rate1;
          x = (_img2W - w)/2;
          y = 0;
        }

        if (rate2 == rate1) {
          h = _img2H;
          w = _img2W;
          x = 0;
          y = 0;
        }
        // 宽度固定
        if (rate2 < rate1) {
          w = _img2W;
          h = w/rate1;
          x = 0;
          y = (_img2H - h)/2;
        }
      }

      self.coordinateLTX = x;
      self.coordinateLTY = y;
      self.coordinateW = w;
      self.coordinateH = h;
    },
    handleImage: function(handleType) {
      let uploadHost = 'http://upload.lanlanlife.com';
      this.url = handleType == 'blur' ? uploadHost+'/writer/util/blurImage': uploadHost+'/writer/util/cut';

      if (this.image.src == '') {
        alert('请先上传图片,再进行相关操作!');
        return;
      }

      if (handleType == 'cut' || handleType == 'blur') {
        $('body').css('overflow', 'hidden');
        this.show = true;
        this.imageCutBlurInit();
      } else if (handleType == 'transform') {
        this.transformImageInit();
        this.request();
      }
    },
    request: function() {
      let vm = this;
      $.ajax({
        url: vm.url,
        type: 'POST',
        xhrFields: {withCredentials: true},
        timeout: 10000,
        data: {
          'src': vm.image.src,
          'x': vm.coordinateLTX,
          'y': vm.coordinateLTY,
          'w': vm.coordinateW,
          'h': vm.coordinateH,
        },
        dataType: 'json',
        beforeSend: function() {
          vm.cutStatus = true;
        },
        success: function(json) {
          vm.cutStatus = false;

          if (json == null) {
            // alert('Error 1');
          } else {
            let code = json.status.code;

            if (code == 1001) {
              vm.image.src = json.result.imageSrc;
              vm.image.key = json.result.imageKey;


              typeof vm.jCropApi != null && vm.jCropApi.destroy();
            } else {
              alert(json.status.msg);
            }
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert('发生异常');
        },
        complete: function(XHR, TS) {

        },
      });
    },
  },
});

module.exports = upload;
