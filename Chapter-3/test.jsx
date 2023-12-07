const element = <main>
    <title>Welcome</title>
    <Carousel images={6} />
    <a href="/blog">Go to the blog</a>
</main>;

const element1 = React.createElement('main', null, 
    React.createElement('title', null, 'Welcome'), 
    React.createElement('Carousel', {images: 6}),
    React.createElement('a', {href: '/blog'}, 'Go to the blog'));
