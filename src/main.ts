const followBtn = document.querySelector("#follow-btn") as HTMLInputElement;
const followDisplay = document.querySelector("#follower-count") as HTMLSpanElement;

function get_follow_count(followDisplay:HTMLSpanElement):number{
    return Number(followDisplay.textContent)
}
function is_lucky():boolean{
    const random_num = Math.random();
    return random_num < 0.1;
}
if(followBtn && followDisplay){
    followBtn.addEventListener("click", ()=>{
        const followCount = get_follow_count(followDisplay);
        if(followBtn.value === "Follow"){
            //増やす処理を行う
            followBtn.value = "Following";
            followDisplay.textContent = is_lucky() ? String(followCount + 10) : String(followCount + 1);
        }
        else if(followBtn.value === "Following"){
            //減らす処理を行う
            followBtn.value = "Follow";
            followDisplay.textContent = String(followCount - 1);
        }
    });
}