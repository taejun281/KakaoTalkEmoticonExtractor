setTimeout(function () {
Java.perform(function () {
    try {
        var item = Java.use("com.kakao.digitalitem.image.lib.ImageDecode");
        var str = Java.use("java.lang.String");
        console.log("Found");

        item.getFrame.overload("int").implementation = function (frame) {
            var ret = this.getFrame(frame)
            var path = this.filePath.value.split("/")
            var key = path[path.length - 1].substring(0, 16)
            var data = ret._a.value
            
            send({ "key": key, "frame":frame,"data": data })

            return ret
        }
    } catch (e) {
        console.log(e)
    }
})
}, 1500)
