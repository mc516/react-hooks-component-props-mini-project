import React from "react";
import Article from "./Article"


function ArticleList({posts}) {
    return (
        <main>
            { posts.map(article => { return <Article key={article.id} title={article.tile} date={article.date} preview={article.preview} />}) }
        </main>
    )
}

export default ArticleList