export default function RecommendationForm() {
    return (
        <section id="contact">
            <div class="flex_center">
                <fieldset>
                    <legend class="introduction">Leave a Recommendation</legend>
                    <input type="text" placeholder="Name (Optional)"> <br/>
                        <textarea id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
                        <div class="flex_center">
                            <button id="recommend_btn" onclick="addRecommendation()">Submit</button>
                        </div>
                    </input>
                </fieldset>
            </div>
        </section>


)

}