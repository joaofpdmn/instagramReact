import StoriesItem from './StoriesItem';
import Posts from './Posts';
import UserInfo from './UserInfo';
import SugggestionsBox from './SuggestionsBox';

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Stories />
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Post />
                </div>
            </div>

            <div class="sidebar">

                <div class="usuario">
                    <User />
                </div>

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    <Suggestions />
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}

function Stories() {
    const stories = [{
        img: "assets/img/9gag.svg",
        name: "9gag"
    }, {
        img: "assets/img/meowed.svg",
        name: "meowed"
    }, {
        img: "assets/img/barked.svg",
        name: "barked"
    }, {
        img: "assets/img/nathanwpylestrangeplanet.svg",
        name: "nathanwpylestrangeplanet"
    }, {
        img: "assets/img/wawawicomics.svg",
        name: "wawawicomics"
    }, {
        img: "assets/img/respondeai.svg",
        name: "respondeai"
    }, {
        img: "assets/img/filomoderna.svg",
        name: "filomoderna"
    }, {
        img: "assets/img/memeriagourmet.svg",
        name: "memeriagourmet"
    }];

    return (
        <>
            {stories.map((stories, index) => <StoriesItem img = {stories.img} name = {stories.name}/>)}
        </>
    );

}

function Post() {
    const postsArray = [
        {
            img: "assets/img/meowed.svg",
            name: "meowed"
        },
        {
            img: "assets/img/barked.svg",
            name: "barked"
        },
        {
            img: "assets/img/barked.svg",
            name: "barked"
        }
        
    ];

    return (
        <>
            {postsArray.map((postsArray, index) => <Posts img = {postsArray.img} name = {postsArray.name}/>)}
        </>
    );
}

function User() {
    const userArray = [{
        img: "assets/img/catanacomics.svg",
        name: "catanacomics",
        subname: "Catana"
    }];

    return(
        <>
            {userArray.map(img => < UserInfo img = {userArray[0].img} name = {userArray[0].name} subname = {userArray[0].subname}/>)}
        </>
    );
}

function Suggestions() {
    const suggestionsArray = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibe.memes"
        },
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibe.memes"
        },
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibe.memes"
        },
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibe.memes"
        },
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibe.memes"
        }
    ];


    return(
        <>
            {suggestionsArray.map((suggestionsArray, index) => <SugggestionsBox img = {suggestionsArray.img} name = {suggestionsArray.name}/>)}
        </>
    );
}

