class YourName {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getYourNameHtml() {
        const { name, avatar, title, bio } = this
        return `
        <div class="card">
        <img class="yourname-img ${this.imgClass}" src="${avatar}" alt="${name}'s avatar">
        <img class="badge hidden" id="badge-img" src="" alt="badge">
            <div class="yourname-info">
                <h4> ${name}</h4>
                <h5> ${title} </h5>
                <div class="yourname-bio">
                    <p> ${bio} </p>
                </div>
            </div>
        </div>
      `
    }
}
//<img class="badge" src="images/badge-like.png">

export default YourName