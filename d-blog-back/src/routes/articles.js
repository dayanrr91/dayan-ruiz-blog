import { Router } from 'express';
const router = Router();

import { getArticles, createArticle, getSingleArticle, deletArticle, updateArticle, getAllArticleNames } from '../controllers/article.controller';

// api/projects/
router.post('/create-article', createArticle);
router.get('/get-articles', getArticles);

// api/projects/:projectid
router.get('/get-article/:url', getSingleArticle);
router.delete('/delete-article/:id', deletArticle);
router.put('/update-article/:id', updateArticle);
router.get('/get-article-names/', getAllArticleNames);

export default router;