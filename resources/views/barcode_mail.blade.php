<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ticket</title>
</head>
<body>
<div>
    {{--    <h3>temp barcode text is here</h3>--}}
    email:{{$item->email}}
    <br>
    fio:{{$item->fio}}
    <br>
    <div>
        <img src="data:image/png;base64, {{$item->barcode}}" alt="barcode"
             style="max-height: 100px!important;background-color: white"/>
    </div>
    <div>
        {{$item->code}}
    </div>
</div>
</body>
</html>
