import { memo } from 'react';

interface GameLogoProps {
  game: 'Pokemon' | 'Lorcana';
}

const logoProps = {
  Lorcana: {
    src: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoicmF2ZW5zYnVyZ2VyXC9maWxlXC9GaktkdlNiazd6ZmlQSFFTa29TQS5wbmcifQ:ravensburger:CI9y36GukozcewofnTAnqP4CMPhkz9mXNnuNfTgtbfQ?width=2400",
    alt: "Lorcana"
  },
  Pokemon: {
    src: "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png",
    alt: "Pokemon"
  }
} as const;

export const GameLogo = memo(({ game }: GameLogoProps) => {
  const { src, alt } = logoProps[game];
  
  return (
    <img
      src={src}
      alt={alt}
      className="h-7 w-auto"
      loading="lazy"
    />
  );
});

GameLogo.displayName = 'GameLogo';