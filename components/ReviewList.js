app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        },
    },
    template:
        /*html*/
        `
    <div class="review-container">
        <h3>Reviews: </h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name}} gave this {{review.rating}} stars
            <br />
            <p>
                {{review.name}} 
                <span v-if="review.recommend">recommended this!</span>
                <span v-else> did not recommend this</span>
            </p>
            "{{review.review}}"</li>
        </ul>
    </div>
    `
})