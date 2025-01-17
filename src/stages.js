import { patrol } from "./objFunc";
import { big } from "./objFunc";
// define some constants
export const JUMP_FORCE = 1320;
export const MOVE_SPEED = 480;
export const FALL_DEATH = 2400;

export const LEVELS = [
  // Level 1: The Gauntlet
  [
    "                                         $    $    $                                                             ",
    "     0                                   =    =    =                                                            ",
    "    --                   $    $     $                        $    $                                             ",
    "           $$            =    =     =         ^^             =    =                                             ",
    "          ====                                ==                        $                                        ",
    "                              ^^                        %         ==    =                   @                   ",
    "                    ^         ==     $               ====    > =               ^^     =======                 ",
    "      @   >    >     ==              =                           ========      ====                              ",
    "=====================     ======                 ===============        ======                                   ",
  ],

  // Level 2: Precision Jumping
  [
    "     $                                                                                                          ",
    "     =    $    $                                                                                               ",
    "          =    =    $                     $    $    $                                                          ",
    "                    =         ^^          =    =    =                                                          ",
    "                              ==                                                                               ",
    "                                               ^^                            $                                 ",
    "     %               >  =            >     =      ==        %             ==    =                                 ",
    "                ========    ===============                   >       =                 @                        ",
    "                                                    ===================    ========================             ",
    "   @     ^^  >     =                                                                                            ",
    "===================                                                                                           ",
  ],

  // Level 3: Speed and Timing
  [
    "                                                                                                              ",
    "                        $                  $    $    $                                                        ",
    "                 $      =                  =    =    =                                                        ",
    "           $     =                                                    $                                      ",
    "           =                          =              ^^                 =                                      ",
    "     %                          =                      ==                                                        ",
    "                                             =                                   @                             ",
    "                      ^^                                            =========== ===                               ",
    "          >    >      ==    >   =     >            >=      >     =                                               ",
    "================================    ================    ======                                                  ",
  ],

  // Level 4: The Ultimate Challenge
  [
    "                                                                                     ",
    "              $                                                                                                 ",
    "    %         =              =                  $    $                                                         ",
    "          $       $       $                        =    =         $                                               ",
    "          =      =      =           =                            =                                               ",
    "                         =                            ^^                     @                                 ",
    "                                           %           ==          =  =========                                  ",
    "                  ^^                                            =                                               ",
    "     >    >       ==     >    >           ==      >    >    >  =                                                  ",
    "====================    =================    ==================                                                ",
    "                                                                                                              ",
  ],
  // Level 5: Spike Maze
  [
    "    $    $    $                                                                                                ",
    "                                   $    $    $    $                                                            ",
    "    %              ^^             =    =    =    =                                                            ",
    "           =       ==                                                                                          ",
    "                                                          ^^    ^^    ^^                                       ",
    "                         ^^    ^^             %           ==    ==    ==                                       ",
    "    >            =       ==    ==                                                    @                         ",
    "  ====                                            >    >    >    >           =======                         ",
    "        ====                    ==========    ================================                                  ",
    "            ====    ========                                                                                   ",
  ],

  // Level 6: Enemy Rush
  [
    "    $    $    $    $    $    $    $                                                                           ",
    "                                                                                                               ",
    "         =         =         =         =                                                                       ",
    "    %                                             $    $    $                                                  ",
    "                                                  =    =    =                                                  ",
    "              >         >         >                                                                            ",
    "    ==========    ==========    ==========                          @                                          ",
    "                                                            =========                                          ",
    "                                                    ^^                                                         ",
    "                                         >    >     ==    >    >                                               ",
    "================    ================    ================================                                        ",
  ],


];

// define what each symbol means in the level graph
export const levelConf = {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    "=": () => [
      sprite("grass"),
      area(),
      body({ isStatic: true }),
      anchor("bot"),
      offscreen({ hide: true }),
      "platform",
    ],
    "-": () => [
      sprite("steel"),
      area(),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      anchor("bot"),
    ],
    0: () => [
      sprite("bag"),
      area(),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      anchor("bot"),
    ],
    $: () => [
      sprite("coin"),
      area(),
      pos(0, -9),
      anchor("bot"),
      offscreen({ hide: true }),
      "coin",
    ],
    "%": () => [
      sprite("prize"),
      area(),
      body({ isStatic: true }),
      anchor("bot"),
      offscreen({ hide: true }),
      "prize",
    ],
    "^": () => [
      sprite("spike"),
      area(),
      body({ isStatic: true }),
      anchor("bot"),
      offscreen({ hide: true }),
      "danger",
    ],
    "#": () => [
      sprite("apple"),
      area(),
      anchor("bot"),
      body(),
      offscreen({ hide: true }),
      "apple",
    ],
    ">": () => [
      sprite("ghosty"),
      area(),
      anchor("bot"),
      body(),
      patrol(),
      offscreen({ hide: true }),
      "enemy",
    ],
    "@": () => [
      sprite("portal"),
      area({ scale: 0.5 }),
      anchor("bot"),
      pos(0, -12),
      offscreen({ hide: true }),
      "portal",
    ],
    C: () => [
      sprite("car"),
      area(),
      anchor("bot"),
      body(),
      patrol(),
      offscreen({ hide: true }),
      "enemy",
    ],
  },
};
