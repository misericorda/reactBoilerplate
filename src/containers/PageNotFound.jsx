class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>Page not found</h3>
        <div>The page "<strong>{this.props.match.url}</strong>" does not exist.</div>
      </div>
    )
  }
}

export default PageNotFound