import _ from 'lodash';
import getPage from './getPage';

export default function toUrl(pages, pagePath) {
    if (_.startsWith(pagePath, '#')) {
        return pagePath;
    } else {
        // remove extension
        pagePath = pagePath.replace(/\.\w+$/, '');
        const page = getPage(pages, pagePath);
        if (!page) {
            throw new Error('A página não foi encontrada no caminho especificado: ' + pagePath);
        }
        return page.url;
    }
}
