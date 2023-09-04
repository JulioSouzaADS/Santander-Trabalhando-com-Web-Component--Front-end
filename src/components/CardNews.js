class Cardnews extends HTMLElement {
    constructor (){
        super ()

        const shadow = this.attachShadow ({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

        build(){
            const componentRoot = document.createElement('div');
            componentRoot.setAttribute('class', 'card');

            const cardLeft = document.createElement ('div');
            cardLeft.setAttribute('class','card__left')

            const autor = document.createElement ('span')
            autor.textContent = 'by ' + (this.getAttribute('autor') || 'Ananymous');
            
            const linkTitle = document.createElement ('a');
            linkTitle.textContent = this.getAttribute ('title');
            linkTitle.href = this.getAttribute('link-url')

            const newContent = document.createElement ('p')
            newContent.textContent =this.getAttribute ('content')

            cardLeft.appendChild( autor);
            cardLeft.appendChild( linkTitle);
            cardLeft.appendChild( newContent);

            const cardRight = document.createElement ('div')
            cardRight.setAttribute('class','card__right')

            const NewsImg = document.createElement ('img')
            NewsImg.src = this.getAttribute('photo') || 'assets/foto-default.png';
            NewsImg.alt = 'foto da noticia'
            cardRight.appendChild(NewsImg)


            componentRoot.appendChild(cardLeft)        
            componentRoot.appendChild(cardRight)

            return componentRoot
        }

        styles() {
            const style = document.createElement('style');
            style.textContent = `
            
            .card{
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow:9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin:auto;
                padding: 40px 50px 20px 10px;
            }
            
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: 400;
            
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p {
                color: rgb(70, 78, 75);
            }

            .card__right img {
                width: 40vw;
                left:0;
                position:relative;
            }
            
            `

            return style;
        }
}

customElements.define('card-news', Cardnews);