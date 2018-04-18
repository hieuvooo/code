var iCode = new ic();
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
iCode.getEditor();
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: false,
    enableLiveAutocompletion: false
});
editor.setValue(atob("PGh0bWw+CiAgICA8Ym9keT4KICAgICAgICAKICAgICAgICAKICAgICAgICA8aDI+aUNvZGUgMy4wPC9oMj4KICAgICAgICA8cD5XaGF0J3MgTmV3PzwvcD4KICAgICAgICAKICAgICAgICA8ZGl2IGNsYXNzPSJvbCI+CiAgICAgICAgPG9sPgogICAgICAgICAgICA8bGk+aVBob25lIERpc3BsYXk8L2xpPgogICAgICAgICAgICA8YnI+CiAgICAgICAgICAgIDxsaT5YY29kZSBFZGl0b3IgRGVzaWduPC9saT4KICAgICAgICAgICAgPGJyPgogICAgICAgICAgICA8bGk+T3B0aW9uYWwgaVBob25lICYgRWRpdG9yIERlc2lnbjwvbGk+CiAgICAgICAgICAgIDxicj4KICAgICAgICAgICAgPGxpPjUgUXVpY2sgQ29tbWFuZHM8L2xpPgogICAgICAgICAgICA8YnI+CiAgICAgICAgICAgIDxsaT5Db21wbGV0ZSBCYWNrZW5kIFVwZGF0ZTwvbGk+CiAgICAgICAgICAgIDxicj4KICAgICAgICAgICAgPGxpPlNlY3VyaXR5IEZpeGVzPC9saT4KICAgICAgICAgICAgPGJyPgogICAgICAgICAgICA8bGk+QW5kIHNvIG11Y2ggbW9yZSE8L2xpPgogICAgICAgIDwvb2w+CiAgICAgICAgIDwvZGl2PiAgIAogICAgICAgIAogICAgICAgIAogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgKiB7CiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291cmllcjsKICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDsKICAgICAgICAgICAgfQogICAgICAgICAgICAKICAgICAgICAgICAgaHRtbCB7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlOwogICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgCiAgICAgICAgICAgIC5vbCB7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4OwogICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgCiAgICAgICAgPC9zdHlsZT4KICAgIDwvYm9keT4KPC9odG1sPg=="), 1);
console.log("[iCode] Setting editor value to default code.");



iCode.bootiPhone();
$("body").append("<style id='customc'></style>");
iCode.PhoneColor("white");
iCode.changeColor("white");


$('#mode').on('change', function(ev) {
    var mode = $('option:selected').attr('value');
    //console.log(mode)
    editor.getSession().setMode(mode);
});


$('#editor').bind("DOMSubtreeModified", function() {

    var code = editor.getValue();
    var encodedCode = btoa(code);

    var storage = localStorage.getItem("current-icode");
    if (storage == encodedCode) {

    } else {
        if (encodedCode == "PGh0bWw+CiAgICA8Ym9keT4KICAgICAgICAKICAgICAgICAKICAgICAgICA8aDI+aUNvZGUgMy4wPC9oMj4KICAgICAgICA8cD5XaGF0J3MgTmV3PzwvcD4KICAgICAgICAKICAgICAgICA8ZGl2IGNsYXNzPSJvbCI+CiAgICAgICAgPG9sPgogICAgICAgICAgICA8bGk+aVBob25lIERpc3BsYXk8L2xpPgogICAgICAgICAgICA8YnI+CiAgICAgICAgICAgIDxsaT5YY29kZSBFZGl0b3IgRGVzaWduPC9saT4KICAgICAgICAgICAgPGJyPgogICAgICAgICAgICA8bGk+T3B0aW9uYWwgaVBob25lICYgRWRpdG9yIERlc2lnbjwvbGk+CiAgICAgICAgICAgIDxicj4KICAgICAgICAgICAgPGxpPjUgUXVpY2sgQ29tbWFuZHM8L2xpPgogICAgICAgICAgICA8YnI+CiAgICAgICAgICAgIDxsaT5Db21wbGV0ZSBCYWNrZW5kIFVwZGF0ZTwvbGk+CiAgICAgICAgICAgIDxicj4KICAgICAgICAgICAgPGxpPlNlY3VyaXR5IEZpeGVzPC9saT4KICAgICAgICAgICAgPGJyPgogICAgICAgICAgICA8bGk+QW5kIHNvIG11Y2ggbW9yZSE8L2xpPgogICAgICAgIDwvb2w+CiAgICAgICAgIDwvZGl2PiAgIAogICAgICAgIAogICAgICAgIAogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgKiB7CiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291cmllcjsKICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDsKICAgICAgICAgICAgfQogICAgICAgICAgICAKICAgICAgICAgICAgaHRtbCB7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlOwogICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgCiAgICAgICAgICAgIC5vbCB7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4OwogICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgCiAgICAgICAgPC9zdHlsZT4KICAgIDwvYm9keT4KPC9odG1sPg==") {
            console.log("not doing anything, its the default code");
        } else {
            iCode.loadCode(encodedCode);
            localStorage.setItem('current-icode', encodedCode);
        }
    }
});