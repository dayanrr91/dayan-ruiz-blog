import Article from '../models/Article'

export async function getArticles (req, res) {
  try {
    const data = await Article.findAll({
      order: [ [ 'publishdate', 'DESC' ]],
      limit: 10
    });
    res.json({ data });
  } catch (e) {
    console.log(e);
  }
}

export async function createArticle (req, res) {
  const { url, name, content, header, subheader, publishdate, author, customdate, password } = req.body;
  if(password !== 'Infinity'){
       res.status(500).json({
        message: 'Wrong Password',
        data: {}
      });
  }
  else{
        try {
            let data = await Article.create(
              {
                url, name, content, header, subheader, publishdate, author, customdate
              },
              {
                fields: [
                  'url', 'name', 'content', 'header', 'subheader', 'publishdate', 'author', 'customdate'
                ]
              }
            )

            if (data) {
              return res.json({
                message: 'Article created successfully',
                data
              });
            }
          } catch (e) {
            console.log(e);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });
          }
  }
  
}

export async function getSingleArticle (req, res) {
  try {
    console.log(req);
    const { url } = req.params;
    const data = await Article.findOne({
      where: {
        url
      }
    });

    res.json(data);
  } catch (e) {
    console.log(e);
  }
}

export async function deletArticle (req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Article.destroy({
      where: {
        id
      }
    });

    res.json({
      message: 'Article deleted',
      count: deleteRowCount
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateArticle (req, res) {
  try {
    const { id } = req.params;
    const { url, name,content, header, subheader, publishdate, author, customdate } = req.body;

    const articles = await Article.findAll({
      attributes: [
        'url', 'name', 'content', 'header', 'subHeader', 'publishDate', 'author', 'customdate'
      ],
      where: {
        id
      }
    });

    if (articles.length > 0) {
      articles.forEach(async article => {
        await article.update({
          url, name, content, header, subheader, publishDate, author, customdate
        })
      });
    }

    return res.json({
      message: 'article updated',
      data: articles
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getAllArticleNames (req, res) {
  try {
    console.log(req);
    const data = await Article.findAll({
    attributes: ['name', 'url'], 
    order: [ [ 'publishdate', 'DESC' ]],
    limit: 10
    });

    res.json(data);
  } catch (e) {
    console.log(e);
  }
}
