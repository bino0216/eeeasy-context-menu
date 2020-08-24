export default function ContextMenu(v = {
    allowClassName: 'context-access'
    // allowAttributeName: 'data-context-access',
})
{
    const menuIdName = 'context-menu-el';
    let contextMenuElement = undefined; // menu element

    const menuOptionListObject = {};

    this.addOptions = function(className, options = [/* optionName, function, child */]) {
        menuOptionListObject[className] = options;
    }

    function createMenu() {
        contextMenuElement = document.createElement('div');
        contextMenuElement.id = menuIdName;

        document.body.append(contextMenuElement);
    }
    createMenu();


    const hideMenu = () => contextMenuElement.style.display = 'none'

    const setOptionElements = (clickedElement) => {
        const removeAllOptions = () => {
            while(contextMenuElement.firstChild) contextMenuElement.removeChild(contextMenuElement.firstChild);
        }
        const createOptions = () => {
            const ifHaveOptionThenReturnKey = () => {
                for(const key in menuOptionListObject)
                    if(clickedElement.classList.contains(key))
                        return key;
            }
            const OptionClassNameOfElement = ifHaveOptionThenReturnKey();
            if(OptionClassNameOfElement === undefined) return;

            console.log(menuOptionListObject[OptionClassNameOfElement])
            const optionList = menuOptionListObject[OptionClassNameOfElement];
            
            const ul_tag = document.createElement('ul');
            for(const option of optionList) {
                const optionName = option[0];
                const optionFunction = option[1];

                const li_tag = document.createElement('li');
                li_tag.append(document.createTextNode(optionName));
                li_tag.addEventListener('click', () => {
                    hideMenu();
                    optionFunction();
                })


                ul_tag.append(li_tag);
            }
            contextMenuElement.append(ul_tag);
        }
        removeAllOptions();
        createOptions();
    }
    const showMenuInLocation = (X, Y) => {
        contextMenuElement.style.cssText = `visibility: hidden;display:block`;
        
        
        // when menu exit screen, adjust location
        function copeWhenMenuGetExitInScreen() {
            const contextMenuWidth = contextMenuElement.clientWidth;
            const contextMenuHeight = contextMenuElement.clientHeight;
            const screenX = window.innerWidth;
            const screenY = window.innerHeight;
    
            if(screenX - X < contextMenuWidth)
                X = screenX - contextMenuWidth - (screenX - X);
    
            if(screenY - Y < contextMenuHeight)
                Y = screenY - contextMenuHeight - (screenY - Y);
        }
        copeWhenMenuGetExitInScreen();

        contextMenuElement.style.cssText = `left: ${X}px; top: ${Y}px; display: block`;
    }
    
    const whenClickedRightMouse = (e) => {
        e.preventDefault();

        const isRightClickeContextAllowedElement = 
        v.allowAttributeName === undefined ?
        e.srcElement.classList.contains(v.allowClassName) :
        e.srcElement.getAttribute(v.allowAttributeName) !== null;


        if(!isRightClickeContextAllowedElement) {
            hideMenu();
            return;
        }


        setOptionElements(e.srcElement);
        showMenuInLocation(e.clientX, e.clientY);
    }

    const whenClickedLeftMouse = (e) => {
        const isClickedLeftMouse = e.which == 1;

        if(!isClickedLeftMouse) return;

        const isClickedContextAllowedElement = e.srcElement.id == menuIdName;

        if(!isClickedContextAllowedElement)
            hideMenu();
    }

    document.addEventListener('click', whenClickedLeftMouse);
    document.addEventListener('contextmenu', whenClickedRightMouse);
}