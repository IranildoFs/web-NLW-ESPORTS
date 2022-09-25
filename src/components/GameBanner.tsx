interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}
export function GameBanner(game: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={game.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{game.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {game.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
