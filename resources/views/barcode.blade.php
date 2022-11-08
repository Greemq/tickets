<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laravel Generate Barcode Examples</title>
{{--    <meta name="csrf-token" content="{{ csrf_token() }}">--}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
    <div class="container mt-4">
{{--        <div class="mb-3">{!! DNS2D::getBarcodeHTML($code, 'QRCODE') !!}</div>--}}
{{--        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'PHARMA') !!}</div>--}}
        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'PHARMA2T') !!}</div>
        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'CODABAR') !!}</div>
{{--        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'KIX') !!}</div>--}}
{{--        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'RMS4CC') !!}</div>--}}
{{--        <div class="mb-3">{!! DNS1D::getBarcodeHTML($code, 'UPCA') !!}</div>--}}
    </div>
</body>
</html>
