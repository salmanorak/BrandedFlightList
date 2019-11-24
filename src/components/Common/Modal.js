import { animation as animationHelper } from '../../js/utils';

const animation = animationHelper();

// eslint-disable-next-line no-undef
export class GeneralModal extends HTMLElement {
    constructor() {
        super();
        this._modalId = 's-'.concat(Date.now());
        this._content = '';
        this._modalTitle = '';
        this._buttons = [];
        this._animation = '';
        this._isParentModal = true;
        this._externalCss = '';
    }
    connectedCallback() {
        document.body.style.overflow = 'hidden';
        this.setAttribute(this._modalId, '');
        this.shadowRoot.querySelector('.close-button').addEventListener('click', this.closeModal.bind(this));
    }
    disconnectedCallback() {
        document.body.style.overflow = 'auto';
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
        this.createModalTemplate(this.modalTitle, this.buttons);
        this.setBody(content);
    }
    get isParentModal() {
        return this._isParentModal;
    }
    set isParentModal(isModal) {
        this._isParentModal = isModal;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(buttons) {
        this._buttons = buttons;
    }
    get modalTitle() {
        return this._modalTitle;
    }
    set modalTitle(modalTitle) {
        this._modalTitle = modalTitle;
    }
    get externalCss() {
        return this._externalCss;
    }
    set externalCss(newCSS) {
        this._externalCss = newCSS;
        this.shadowRoot.appendChild(newCSS);
    }
    setBody(content) {
        this.shadowRoot.querySelector('.modal-body').innerHTML = content;
    }
    createModalTemplate(title, buttons) {
        this.attachShadow({ mode: 'open' });
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <div class="modal-container">
                <div class="modal-header">
                    <div class="title">${title}</div>
                    <div class="close-button"></div>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <div class="modal-buttons">
                        ${buttons.map(button => `<div class="modal-button">${button.title}</div>`).join('')}
                        <div id="close" class="modal-button" >Close</div>
                    </div>
                </div>
            </div>
        `;
        shadow.querySelector('#close').addEventListener('click', this.closeModal.bind(this));
        shadow.querySelectorAll('.modal-button:not(#close)').forEach((button, index) => {
            button.addEventListener('click', this.buttons[index].callback.bind(this));
        });
        this.appendChild(this.createStyle());
        shadow.appendChild(this.createShadowStyle());
    }
    createShadowStyle() {
        const styleItem = document.createElement('style');
        styleItem.textContent = `
            .modal-container{
                min-width: 300px;
                max-height: 70%;
                min-height: 200px;
            }
            .modal-body{
                overflow: scroll;
                box-sizing: border-box;
                padding: 10px 15px;
            }
            .modal-header{
                position: relative;
                border-bottom: 1px solid gray;
            }
            .title{
                font-size: 30px;
                padding: 10px;
                text-align: center;
                background: gray;
                color: white;
            }
            .modal-footer{
                position:fixed;
                width: 100%;
                bottom: 0;
                padding-bottom: 10px;
                text-align: center;
            }
            .modal-buttons{
                width: 100%;
                text-align: center;
            }
            .modal-button{
                background-color: white;
                border : 1px solid black;
                padding: 10px;
                border-radius: 5px;
                margin: 0 10px;
            }
            .modal-button+.modal-button{
                margin-top : 7px;
            }
            .modal-button:nth-last-child(1){
                background-color: red;
            }
            .close-button:after{
                content: "X";
                position: absolute;
                right: 10px;
                top: 4px;
                font-size: 30px;
                color: white;
                font-weight: 300;
                padding: 3px;
            }
        `;
        return styleItem;
    }
    createStyle() {
        const styleItem = document.createElement('style');
        styleItem.textContent = `
            general-modal[${this._modalId}]{
                position: fixed;
                top: 0;
                left:0;
                right:0;
                bottom:0;
                background-color:white;
            }
            general-modal[${this._modalId}]::before{
                position: fixed;
                top:0;
                left:0;
                right:0;
                bottom:0;
                background-color: rgba(0, 0, 0, 0.3);
            }
        `;
        return styleItem;
    }
    closeModal() {
        if (this.isParentModal) {
            animation.fadeOut(this.parentElement);
            setTimeout(() => {
                this.parentElement.remove();
            }, 300);
        } else {
            animation.fadeOut(this);
            setTimeout(() => {
                this.remove();
            }, 300);
        }
    }
}
