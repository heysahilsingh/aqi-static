// FUNCTION - CREATE HTML ELEMENTS
function createHTML(tagName, attributes = {}, content = "") {
    try {
        const HTML = document.createElement(tagName);

        for (const [key, value] of Object.entries(attributes)) {
            if (typeof value === "function") {
                HTML.setAttribute(key, value());
            } else if (typeof value === "boolean") {
                if (value) {
                    HTML.setAttribute(key, "");
                } else {
                    HTML.removeAttribute(key);
                }
            } else {
                HTML.setAttribute(key, value);
            }
        }

        if (typeof content === "function") {
            HTML.appendChild(content());
        } else if (content instanceof Node) {
            HTML.appendChild(content);
        } else {
            HTML.textContent = content;
        }

        return HTML;
    } catch (error) {
        console.error(error, "createHTML");
    }
}

// FUNCTION - APPEND HTML ELEMENT
function appendHTML(child, parent) {
    try {
        if (Array.isArray(child)) {
            for (let i = 0; i < child.length; i++) {
                parent.appendChild(child[i]);
            }
        } else {
            parent.appendChild(child);
        }
    } catch (error) {
        console.error(error, "Child or Parent is either undefined or Null.");
    }
}

// Incremental Counter
// function incrementalCounter(number, element) {
//     let counter = 0;
//     const targetElement = element;

//     const intervalId = setInterval(function() {
//       if (counter <= number) {
//         targetElement.textContent = counter;
//         counter++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 1);
//   }