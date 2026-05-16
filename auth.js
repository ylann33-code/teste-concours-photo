import {
    auth,
    provider,
    signInWithPopup,
    signOut
} from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");
const userInfo = document.getElementById("userInfo");

loginBtn.addEventListener("click", async () => {

    try{

        const result = await signInWithPopup(
            auth,
            provider
        );

        const user = result.user;

        userInfo.innerHTML = `
            <h3>${user.displayName}</h3>
            <p>${user.email}</p>
            <button id="logoutBtn">
                Déconnexion
            </button>
        `;

        document
            .getElementById("logoutBtn")
            .addEventListener("click", logout);

    }
    catch(error){

        console.error(error);

        alert(
            "Erreur de connexion"
        );

    }

});

async function logout(){

    await signOut(auth);

    location.reload();
 
}
