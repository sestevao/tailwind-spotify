import { Home as HomeIcon, Search, Library, Delete, Maximize, Minus, Plus, ArrowRight, ChevronDown, Heart, Pin, ChevronLeft, ChevronRight, Users2, Play, Shuffle, SkipForward, SkipBack, MonitorPlay, Mic2, ListMusic, Repeat, MonitorSmartphone, Volume2 } from 'lucide-react';
import Image from "next/legacy/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        <div className="flex flex-row gap-2 p-3 bg-zinc-950">
            <div className="bg-red-500 w-3 h-3 rounded-full" />
            <div className="bg-yellow-400 w-3 h-3 rounded-full" />
            <div className="bg-green-500 w-3 h-3 rounded-full" />
        </div>

        <div className="flex flex-1">
          <aside className="w-96 m-2 space-y-2">
              <div className="bg-zinc-900 rounded-lg p-4">
                  <nav className="flex flex-col space-y-6">
                      <a href="" className="flex items-center gap-4 text-sm font-semibold hover:text-zinc-300"><HomeIcon /> Home</a>
                      <a href="" className="flex items-center gap-4 text-sm font-semibold hover:text-zinc-300"><Search /> Search</a>
                  </nav>
              </div>

              <div className="bg-zinc-900 rounded-lg p-4 max-h-full">
                  <div className="flex justify-between items-center">
                      <a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-100"><Library /> Your Library</a>
                      <div className="flex flex-row gap-2">
                          <a href="" className=""><Plus /></a>
                          <a href="" className=""><ArrowRight absoluteStrokeWidth/></a>
                      </div>
                  </div>

                  <div className="flex flex-row gap-4 my-4 text-white flex-shrink-0 overflow-hidden">
                      <div className="px-2 py-1 bg-zinc-700 text-xs rounded-full h-6"><span>Playlists</span></div>
                      <div className="px-2 py-1 bg-zinc-700 text-xs rounded-full h-6 flex-shrink-0"><span>Podcasts & Shows</span></div>
                      <div className="px-2 py-1 bg-zinc-700 text-xs rounded-full h-6"><span>Albums</span></div>
                      <div className="px-2 py-1 bg-zinc-700 text-xs rounded-full h-6"><span>Artists</span></div>
                  </div>

                  <div className="flex flex-row justify-between">
                      <Search />
                      <div className="flex flex-row text-sm">
                          Recents
                          <ChevronDown />
                      </div>
                  </div>

                  <nav className="my-4 space-y-2 gap-2">
                      <a href="" className="flex flex-row gap-2 bg-zinc-800 p-2 rounded-md">
                          <div className="rounded-sm bg-blue-600 h-fit w-fit p-3">
                              <Heart color="white" fill="white" />
                          </div>

                          <div className="text-sm text-white flex flex-col space-y-2">
                              <span className="">Liked Songs</span>

                              <div className="text-xs text-zinc-600 flex flex-row justify-center items-center gap-2">
                                  <Pin size={14} className="transform rotate-45 text-green-500 fill-green-500" />
                                  <span>Playlist</span>
                                  <div className="bg-zinc-700 h-2 w-2 rounded-full" />
                                  <span>66 songs</span>
                              </div>
                          </div>
                      </a>

                      <a href="" className="flex flex-row gap-2 p-2">
                          <Image src="/images/whitenoise_album.jpg" alt="White Noise Album" width={45} height={45} className="rounded-sm" />

                          <div className="text-sm text-white flex flex-col space-y-2">
                              <span className="">White Noise Songs</span>

                              <div className="text-xs text-zinc-600 flex flex-row justify-center items-center gap-2">
                                  <span>Playlist</span>
                                  <div className="bg-zinc-700 h-2 w-2 rounded-full" />
                                  <span>Spotify</span>
                              </div>
                          </div>
                      </a>

                      <a href="" className="flex flex-row gap-2 p-2">
                          <Image src="/images/davidcarreira_album.jpg" alt="David Carreira Album 7" width={45} height={45} className="rounded-sm" />

                          <div className="text-sm text-white flex flex-col space-y-2">
                              <span className="">7 - David Carreira</span>

                              <div className="text-xs text-zinc-600 flex flex-row justify-center items-center gap-2">
                                  <span>Playlist</span>
                                  <div className="bg-zinc-700 h-2 w-2 rounded-full" />
                                  <span>66 songs</span>
                              </div>
                          </div>
                      </a>

                      <a href="" className="flex flex-row gap-2 p-2">
                          <Image src="/images/wedding_album.jpg" alt="Wedding Album" width={45} height={45} className="rounded-sm" />

                          <div className="text-sm text-white flex flex-col space-y-2">
                              <span className="">Wedding Playlist</span>

                              <div className="text-xs text-zinc-600 flex flex-row justify-center items-center gap-2">
                                  <span>Playlist</span>
                                  <div className="bg-zinc-700 h-2 w-2 rounded-full" />
                                  <span>66 songs</span>
                              </div>
                          </div>
                      </a>
                  </nav>
              </div>
          </aside>

          <main className="flex-1 p-6 mt-2 bg-zinc-900 rounded-lg space-y-6">
              <div className="rounded-t flex flex-row justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                      <ChevronLeft className="bg-black/20 rounded-full h-8 w-8 flex items-center p-1" />
                      <ChevronRight className="bg-black/20 rounded-full h-8 w-8 flex items-center p-1" />
                  </div>

                  <div className="flex gap-4">
                      <div className="bg-white rounded-full px-4 flex items-center text-black text-sm font-semibold">Explore Premium</div>

                      <Users2 className="bg-black/20 p-2 rounded-full h-8 w-8" />
                      <Image src="/images/avatar.jpeg" alt="Avatar Picture" width={30} height={30} className="rounded-full" />
                  </div>
              </div>

              <div className="relative w-full h-50 rounded">
                <Image src="/images/banner.jpg" alt="Samsung Banner" layout="fill" objectFit="cover" quality={100} />
              </div>

              <h1 className="text-3xl font-semibold my-10 text-white">Good evening</h1>

              <div className="grid grid-cols-3 gap-4 gap-y-2">
                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <Image src="/images/foofithers_album.jpg" alt="Foo Fighters album cover" width={70} height={70} className="drop-shadow-2xl shadow-zinc-900" />
                      <span className="text-white font-semibold text-sm">Foo Fighters</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>

                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <Image src="/images/leosantana_album.jpg" alt="Leo Santana album cover" width={70} height={70} className="drop-shadow-2xl shadow-zinc-900" />
                      <span className="text-white font-semibold text-sm">Leo Santana</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>

                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <Image src="/images/sertanejo_album.jpg" alt="Sertanejo album cover" width={70} height={70} className="drop-shadow-2xl shadow-zinc-900" />
                      <span className="text-white font-semibold text-sm">Sertanejo 2023</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>

                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <div className="rounded-sm bg-blue-600 h-[70px] w-[70px] p-3 drop-shadow-2xl flex items-center justify-center">
                          <Heart color="white" fill="white" />
                      </div>
                      <span className="text-white font-semibold text-sm">Liked Songs</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>

                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <Image src="/images/viral_album.jpg" alt="Viral Hits album cover" width={70} height={70} className="drop-shadow-2xl shadow-zinc-900" />
                      <span className="text-white font-semibold text-sm">Tiktok Viral Hits</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>

                  <a href="" className="flex flex-row justify-between items-center bg-white/10 gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
                      <Image src="/images/popmix_album.jpg" alt="Pop Mix 2022 album cover" width={70} height={70} className="drop-shadow-2xl shadow-zinc-900" />
                      <span className="text-white font-semibold text-sm">Pop Mix 2022</span>

                      <button className="p-2 rounded-full bg-green-400 flex items-center justify-center ml-auto mr-4 w-10 h-10 invisible group-hover:visible">
                          <Play color="black" fill="black" />
                      </button>
                  </a>
              </div>

              <div className="flex justify-between items-center">
                  <h1 className="text-xl text-white font-semibold ">Shows that you might like</h1>
                  <a href="" className="">Show all</a>
              </div>

              <div className="flex flex-row overflow-hidden gap-4">
                  <div className="bg-black/30 p-4 rounded hover:bg-black/20 space-y-4">
                      <Image src="/images/batepe_podcast.jpg" alt="Bate Pe Podcast" width={170} height={100} className="rounded" />

                      <div className="flex flex-col w-[170px]">
                          <h4 className="font-semibold my-2">Bate Pe</h4>
                          <small className="text-zinc-700">Mafalda Castro e Rui Simoes</small>
                      </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded hover:bg-black/20 space-y-4">
                      <Image src="/images/quempodepode.jpg" alt="Bate Pe Podcast" width={170} height={100} className="rounded" />

                      <div className="flex flex-col w-[170px]">
                          <h4 className="font-semibold my-2">Quem Pode, Pode</h4>
                          <small className="text-zinc-700 whitespace-normal">Giovanna Ewbank e Fernanda Paes Leme</small>
                      </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded hover:bg-black/20 space-y-4">
                      <Image src="/images/poddelas.jpg" alt="Bate Pe Podcast" width={170} height={100} className="rounded" />

                      <div className="flex flex-col w-[170px]">
                          <h4 className="font-semibold my-2">PODDELAS</h4>
                      </div>
                  </div>
              </div>
          </main>

            <aside className="w-96 bg-zinc-900 m-2 space-y-2">

            </aside>
        </div>

        <footer className="p-4">
            <div className="flex flex-row items-center justify-between w-">
                <div className=" w-94 flex gap-4 justify-center items-center mx-4">
                    <Image src="/images/calmdown.jpg" alt="Calm Down Music" width={60} height={60} />

                    <div className="flex flex-col">
                        <small className="">Calm Down (with Selena Gomez)</small>
                        <small className="text-xs text-zinc-400">Rema, Selena Gomez</small>
                    </div>

                    <Heart className="text-green-500 fill-green-500" size={18} />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-6 items-center justify-center text-zinc-400 ">
                        <Shuffle size={14} className="hover:text-zinc-600" />
                        <SkipBack size={14} className="hover:text-zinc-600" />
                        <Play size={14} color="black" fill="black" className="flex items-center rounded-full h-8 w-8 p-1.5 bg-white" />
                        <SkipForward size={14} className="hover:text-zinc-600" />
                        <Repeat size={14} className="hover:text-zinc-600" />
                    </div>

                    <div className="text-zinc-600 flex items-center gap-4">
                        <small>0:00</small>
                        <div className="w-[650px] rounded-full h-1 bg-white/20" />
                        <small>3:59</small>
                    </div>
                </div>

                <div className="w-94 flex gap-4 text-zinc-400 items-center">
                    <div className="flex flex-col items-center gap-1">
                        <MonitorPlay size={16} className="text-green-500" />
                        <div className="bg-green-500 rounded-full w-1 h-1" />
                    </div>
                    <Mic2 size={16} />
                    <ListMusic size={16} />
                    <MonitorSmartphone size={16} />
                    <Volume2 size={16} />

                    <div className="w-[90px] h-1 rounded-full bg-white/50" />
                </div>
            </div>
        </footer>
    </div>
  )
}
