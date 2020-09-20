Java.perform(function () {
    try {
        var item = Java.use("com.kakao.digitalitem.image.lib.ImageDecode");

        var File = Java.use("java.io.File");
        var Bitmap = Java.use("android.graphics.Bitmap")
        var BitmapConfig = Java.use("android.graphics.Bitmap$Config");
        var CompressFormat = Java.use("android.graphics.Bitmap$CompressFormat");
        var FileOutputStream = Java.use("java.io.FileOutputStream")

        console.log("Found");

        item.getFrame.overload("int").implementation = function (frame) {
            var ret = this.getFrame(frame)
            var path = this.filePath.value.split("/")
            var key = path[path.length - 1].substring(0, 16)
            var data = ret._a.value

            var f = File.$new("/sdcard/emoticons/" + key + "/")
            if (!f.exists()) {
                f.mkdir()
            }
            var bitmap = Bitmap.createBitmap(data, 360, 360, BitmapConfig.ARGB_8888.value);
            var out = FileOutputStream.$new("/sdcard/emoticons/" + key + "/" + frame + ".png")
            bitmap.compress(CompressFormat.PNG.value, 100, out);

            return ret
        }
    } catch (e) {
        console.log(e)
    }
})
