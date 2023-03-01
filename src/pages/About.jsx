function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github User Finder</h1>
      <div className="text-lg text-gray-400">
        <p>
          A React App to search Github user profiles and display profile details
          using the github API. Project based on{' '}
          <a
            href="https://github.com/bradtraversy/github-finder-app"
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >
            Brad Traversy's tutorial
          </a>
          , to which I added some new features, such as pagination of search
          results, contact form, theme change, etc.
        </p>
        <p>Layout powered by Tailwind CSS and daisyUI.</p>
      </div>
      <p className="text-sm text-gray-400 mt-2">Verion: 1.0.0.</p>
    </div>
  );
}

export default About;
