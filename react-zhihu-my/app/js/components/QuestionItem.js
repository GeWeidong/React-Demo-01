var React = require('react');

module.exports = React.createClass({
	//点击上箭头，评论加1
	voteUp:function(e){
		var newCount = parseInt(this.props.voteCount + 1);
		this.props.onVote(this.props.questionKey,newCount);
	},
	//点击下箭头，评论减1
	voteDown:function(e){
		var newCount = parseInt(this.props.voteCount - 1);
		this.props.onVote(this.props.questionKey,newCount);
	},
	//单个评论列表
	render:function(){
		return (
			<div className="media">
	            <div className="media-left">
	              <button className="btn btn-default" onClick={this.voteUp}>
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-default" onClick={this.voteDown}>
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.description}</p>
	            </div>
	        </div>
		)
	}
})