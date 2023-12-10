function Entry() {
  return( 
      <section class="section">
        <div class="container">
          <form>
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <input class="input" type="date" placeholder="Choose a date"/>
              </div>
            </div>
            <div class="field">
              <label class="label">Journal Entry</label>
              <div class="control">
                <textarea class="textarea" placeholder="Write your journal entry here..."></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-info">Create</button>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
}

export default Entry;