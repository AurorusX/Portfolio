import  { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId : '9cek9aun',
    
    dataset: 'production',
    apiVersion:'2022-02-01',
    useCdn: true,
    token:'skmRS1ElvtkMMje1Il1Jxdt94vgxgNp68MY1DfzSkl9WNHliSeBHpPweSelKHf0iRt0UArfNL4OpPOGRYUdVVQ8Uvd1iSkULFc2jFzUeC9lt10E5AgKTtVjYIqD07KShb0YM1ff8W1gy3lNyfrI6apXcpmC6fPSQQHEOvGK0nZWsaceIorv3'

});

const builder= imageUrlBuilder(client);

export const UrlFor =(source)=> builder.image(source);