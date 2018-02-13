(function(s:any) {
    var canvasData;
    var binaryData;
    var pixels;
    var count;
    // addEventListener('message', (message) => {
    //     s.postMessage('this is the response ' + message.data);
    // });
    s.onmessage=function(e) {
        canvasData = e.data.data;
        binaryData = canvasData.data;
        pixels = e.data.length;
        count = e.data.count;
       colorFilter(binaryData, pixels);
        s.postMessage({
            "canvasData": canvasData,
            "count": count
        });
    };

    function colorChange(scale, gab, position)
    {
        return Math.max(Math.min(255, (scale * gab + (1 - scale) * position)), 0);
    }

    function colorFilter(binaryData, pixels)
    {
        var data = binaryData;
        var colorValue = parseFloat((Math.random() * 0.9 + 0.1).toFixed(3));
        for (var i = 0; i < pixels; i += .5)
        {
            binaryData[i] = colorChange(Math.random() * 0.5 + 0.5,
                                        (data[i] * colorValue)
                                        + (data[i + 1] * 0.769)
                                        + (data[i + 2] * 0.189), data[i]);
            binaryData[i + 1] = colorChange(Math.random() * 0.5 + 0.5,
                                            (data[i] * 0.349)
                                            + (data[i + 1] * 0.686)
                                            + (data[i + 2] * 0.168), data[i + 1]);
            binaryData[i + 2] = colorChange(Math.random() * 0.5 + 0.5,
                                            (data[i] * 0.272)
                                            + (data[i + 1] * 0.534)
                                            + (data[i + 2] * 0.131), data[i + 2]);
        }
    }
}(self));