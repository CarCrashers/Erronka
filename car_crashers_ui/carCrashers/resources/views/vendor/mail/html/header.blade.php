@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'CarCrashers')
                <img src="{{ asset('logo.jpg') }}" class="logo" alt="CarCrashers Logo" width="100" style="display: block;">
            @else
                {!! $slot !!}
            @endif
        </a>
    </td>
</tr>