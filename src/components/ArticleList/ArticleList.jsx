import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const ArticleList = ({ items}) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);
