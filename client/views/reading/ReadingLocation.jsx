ReadingLocation = React.createClass({

  propTypes: {
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    let query = {};

    // This is only for the prototype--investigate better routing options in the future
    let work_slug = FlowRouter.current().path.split("/")[2];

    return {
      work: Works.findOne({slug : work_slug}),
      text: Texts.find({work : work_slug}, {sort : {n_1 : 1, n_2 : 1, n_3 : 1}, limit : 20 }).fetch(),
      currentUser: Meteor.user()
    };

  },


  render() {

    return (
      <div className="reading-location">
        <a className="md-button md-ink-ripple" href="/" aria-label="Menu">
        {this.data.work.author},
          <div className="md-ripple-container"></div>
        </a>

        <a className="md-button md-ink-ripple" href="/" aria-label="Menu">
          <em>{this.data.work.title}</em>,
          <div className="md-ripple-container"></div>
        </a>

        <a className="md-button md-ink-ripple" href="/" aria-label="Menu">
          {this.data.text[0].n_1},
          <div className="md-ripple-container"></div>
        </a>

        <a className="md-button md-ink-ripple" href="/" aria-label="Menu">
        {this.data.text[0].n_2}
          <div className="md-ripple-container"></div>
        </a>

      </div>
      );
  }
});

Template.headerReading.helpers({
  ReadingLocation() {
    return ReadingLocation;
  }
});
