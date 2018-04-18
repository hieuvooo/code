// iCode System
// By HeyItsWarsame


function ic() {
    var app = this;

    app.getEditor = function() {
        console.log("[iCode] Fetching Ace Editor.");
        editor.getSession().setUseWorker(false);
        editor.getSession().setUseWrapMode(true);
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/html");
        console.log("[iCode] Fetched Ace Editor.");
        editor.$blockScrolling = Infinity;

    }

    app.bootiPhone = function() {
        console.log("[iCode] Fetching resources for iPhone.");
        var iframe = '<iframe id="viewport" src="about:blank" height="100%" width="100%" frameborder="0"></iframe>';
        var boot = '<div class="boot"><center><div class="boot-image"></div></center></div>';
        console.log("[iCode] Displaying boot screen.");
        $("#boot").html(boot);
        $(".boot").fadeIn(200);
        console.log("[iCode] Loading iCode on the iPhone.");
        setTimeout(function() {
            $("#boot").append(iframe);
            $(".boot").fadeOut(200);
            $(".boot").remove();
            app.loadCode(localStorage.getItem('current-icode'));
            console.log("[iCode] iPhone successfully booted.");
        }, 3000);


    }

    app.clearCode = function() {
        if (confirm("Are you sure you want to clear the iCode editor?") == true) {
            editor.setValue("", 1);
        } else {

        }
    }

    app.refreshPhone = function() {
        $("#viewport").remove();
        iCode.bootiPhone();
    }

    app.saveCode = function() {
        var code = localStorage.getItem("current-icode");
        var name = prompt("Please name this code.");

        /* Thank you stackoverflow */
        var textToWrite = code;
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/html' });
        var fileNameToSaveAs = name;

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {

            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();


    }

    app.importCode = function() {
        var inport = prompt("Enter the URL of the code");

        $.get("code.php?url=" + inport, function(data) {
            if (data == 0) {
                app.alert("Sorry, but that isn't a valid URL.");
            } else {
                editor.setValue(data, 1);
                $("#url").val("");
            }
        });
    }

    app.copyCode = function() {
        new Clipboard('#copyCode', {
            text: function(trigger) {
                return $("#copycode").val();
            }
        });
        $('#copyCode').trigger('click');
    }

    app.loadCode = function(code) {
        var iframe = document.getElementById('viewport');
        iframe.src = "data:text/html;base64," + code;
        $("#copycode").val(atob(code));
    }

    app.prompt = function(prompt) {
        $(".prompts").html('<div class="prompt"><p>' + prompt + '</p><input id="prompt"/><a href="#" class="button">Enter</a><a href="#" class="button" onclick="iCode.closePrompt();">Cancel</a></div>');
        $(".prompt").fadeIn(200);
        $(".prompt-overlay").fadeIn(200);
    }

    app.closePrompt = function() {
        $(".prompt").fadeOut(200);
        $(".prompt-overlay").fadeOut(200);
        $(".prompt").remove();
    }

    app.alert = function(alert, title) {
        if (typeof title !== 'undefined') {
            // title is set
        } else {
            var title = "iCode";
        }
        $(".alerts").html('<div class="alert"><h2>' + title + '</h2><p>' + alert + '</p><a href="#" class="button" onclick="iCode.closeAlert();">Dismiss</a></div>');
        $(".alert").fadeIn(200);
        $(".alert-overlay").fadeIn(200);
    }

    app.closeAlert = function() {
        $(".alert").fadeOut(200);
        $(".alert-overlay").fadeOut(200);
        $(".alert").remove();
    }

    app.PhoneColor = function(color) {
        if (color == "white") {
            $(".phone").removeClass("black");
            $(".phone").removeClass("rose");
            $(".phone").addClass("rose");
        } else if (color == "black") {
            $(".phone").removeClass("black");
            $(".phone").removeClass("rose");
            $(".phone").addClass("black");
        }
    }

    app.changeColor = function(color) {
        if (color == "white") {
            css = "::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#eee;border:0;opacity:.1;border-radius:0}::-webkit-scrollbar-thumb{border-radius:0;border:0;background:#d5d5d5;opacity:.1}.right-panel{background: #ededed; top:0%; left: 80%; right:0; bottom:0; position: absolute;}html{background: #e8e8e8; color: #555;} .button,input{display:block;padding:10px}input{background:#fff;width:100%;border-top:1px solid #aaa;border-bottom:1px solid #aaa;color:#555}input::placeholder{color:#888}.button{background:#007aff;color:#fff;border:0;text-decoration:none;} textarea {background: #ddd;}";
            $("#customc").html(css);
            editor.setTheme("ace/theme/xcode");
        } else if (color == "black") {
            css = "";
            $("#customc").html(css);
            editor.setTheme("ace/theme/monokai");
        }
    }

    app.loadStorage = function() {
        editor.setValue(atob(localStorage.getItem('current-icode')), 1);
        console.log("[iCode] Setting editor value to LocalStorage code.");
    }
}