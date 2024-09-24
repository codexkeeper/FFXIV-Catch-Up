document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    var lastClickedElement = null;

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event from bubbling up to parent
            this.classList.toggle("active");

            // Remove glow ofclicked element
            if (lastClickedElement && lastClickedElement !== this) {
                lastClickedElement.classList.remove("glow");
            }

            // Add glow to the current element
            this.classList.add("glow");
            lastClickedElement = this;

            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                // If neted collapsible, adjust parents maxHeight
                var parent = this.parentElement;
                while (parent) {
                    if (parent.classList.contains('content')) {
                        parent.style.maxHeight = parseInt(parent.style.maxHeight) + content.scrollHeight + "px";
                        parent = parent.previousElementSibling;
                    } else {
                        break;
                    }
                }
            }
        });
    }


});