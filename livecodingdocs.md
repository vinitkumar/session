## Basics


Will use a public API for Github Gist

`
https://api.github.com/gists?client_id=6396a71f53863e556b11&&client_secret=098d29751f484f46307027baf674d072ae97050a`')
`

```js
<Route exact path="/"  render={() => <div>Welcome</div>} />
{ gists && (
  <Route path="/gist/:gistId" render={({match})=> (
    <Gist key={match.params.gistId} gist={gists.find(g=> g.id === match.params.gistId )} />
  )} />
)}
```


Packages Used:

```
react-syntax-highlighter
Moment
```