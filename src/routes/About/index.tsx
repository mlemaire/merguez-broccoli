function About() {
  return (
    <div className="prose max-w-xl bg-white/70 m-auto rounded-lg p-4 text-center mb-36">
      <h1>Pourquoi merguez brocoli ?</h1>
      <p>
        Parce que je n'avais aucune idée de nom et franchement ça claque non ?
        après si t'aime pas, tu peux toujours me laisser ta suggestion.
      </p>
      <h2>Et cette page c'est pour ?</h2>
      <p>
        faut bien faire du bla bla quelque part non ? Eh bien je trouve que
        cette page est parfaite pour ça
      </p>
      <h3>Tu as une idée pour amélioré ce site ?</h3>
      <p>
        Don't panic, c'est open-source donc te prive pas, viens faire une petite
        Pr sur mon repo, je regarderai ça avec grand plaisir.
      </p>
      <p>
        Et mm si t'es pas dev, tu peux venir me proposer tes idées via une petit{' '}
        <a
          href="https://github.com/mlemaire/merguez-broccoli/issues"
          target="_blank"
          rel="noreferrer"
        >
          issue
        </a>
      </p>
    </div>
  )
}

export default About
