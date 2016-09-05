/* Start game on load */
window.addEventListener('load', function() {
  $.start();
});

$.start = function() {
  $.init();
  // Input
  $.i = new Input();
  // Collisions system
  //$.o = new Collisions();
  // Sound manager
  //$.s = new Sounds();
  // Bind keyboard
  $.i.b([13, 38, 40]);

  // Sounds
  //$.s.a('s', [0,,0.0989,0.3295,0.2402,0.4314,,,,,,0.4986,0.5758,,,,,,1,,,,,0.5]);
  //$.s.a('bl', [0,,0.1622,0.2831,0.0177,0.7183,0.0176,-0.6492,,,,,,0.4253,0.0418,,,,1,,,,,0.5]);
  //$.s.a('el', [0,,0.116,0.0087,0.0639,0.5799,0.2,-0.2526,,,,,,0.7269,-0.239,,,,1,,,,,0.5]);
  //$.s.a('bu', [3,,0.143,0.6199,0.3681,0.0101,,0.0635,,,,0.6529,0.8676,,,,,,1,,,,,0.5]);
  //$.s.a('j', [0,,0.1294,,0.2786,0.3422,,0.2308,,,,,,0.1903,,,,,1,,,,,0.5]);
  //$.s.a('d', [1,0.0178,0.5066,0.022,0.8284,0.2873,,-0.0044,-0.4035,-0.049,0.3671,-0.4245,0.5258,0.544,0.0047,0.2887,,-0.2925,0.959,0.0046,,0.0715,-0.0178,0.5]);
  //$.s.a('k', [0,0.0173,0.3085,,0.931,0.544,,-0.2297,-0.096,0.0762,0.647,0.9264,-0.981,,0.002,,0.0321,0.2727,0.9998,-0.0649,0.4995,0.0222,-0.2578,0.5]);
  ////$.s.a('ad', [0,0.0206,0.174,0.1609,0.9405,0.6377,0.0504,0.0941,0.6764,0.2293,0.2062,1,0.0577,0.8306,-0.0722,0.5709,-0.3102,0.4869,0.8615,-0.0143,0.5708,0.1613,0.2586,0.5]);
  ////$.s.a('ad', [0,,0.3789,,0.3857,0.4568,,0.1294,,0.4663,0.4357,,,0.0749,,,,,1,,,,,0.5]);
  //$.s.a('ad', [0,,0.3789,,0.3857,0.4568,,0.1294,,0.4663,0.4357,,,0.0749,,,,,1,,,,,0.5]);
  //// Pill
  //$.s.a('pl', [0,,0.062,,0.2621,0.7185,,-0.5637,,,,,,0.0385,,,,,1,,,0.1982,,0.5]);
  //// Timeout alert
  //$.s.a('toa', [1,,0.657,0.0013,0.5775,0.2682,,0.2757,-0.2594,,,-0.1283,0.179,,0.1387,0.8701,-0.4883,-0.0501,0.8942,0.0035,0.506,0.0001,-0.0001,0.5]);
  //// Timeout tick
  //$.s.a('tot', [1,,0.0515,,0.1604,0.4166,,0.1333,,,,,,,,0.7266,,,1,,,,,0.5]);
  //$.s.a('xp', [3,,0.28,0.47,0.3694,0.26,,-0.3587,,,,,,,,,,-0.157,1,,,,,0.5]);
  //// Sparks
  //$.s.a('sp', [1,,0.1795,,0.0004,0.7687,0.0614,-0.6142,,,,,,0.3246,0.0199,,,,1,,,0.2508,,0.33]);
  //// BGM normal
  //$.s.a('b1', [1,0.2235,0.01,0.0178,0.7708,0.278,,-0.3022,0.8384,,0.9594,-0.3439,0.5078,0.3697,,0.8606,-0.0006,-0.6092,0.9437,0.3918,,0.0087,0.0603,0.23]);
  //$.s.a('b2', [2,0.467,0.3716,0.1497,0.4058,0.5584,,-0.0246,-0.0415,0.079,0.9803,-0.9292,,,0.713,,-0.0277,-0.3878,0.9875,,0.1455,0.0099,,0.29]);
  //$.s.a('b3', [2,0.0034,0.0882,0.36,0.7488,0.13,,,-0.0409,,,0.909,0.8699,0.1297,,0.0077,-0.0222,0.0108,0.9316,0.7784,0.4954,0.002,-0.1106,0.21]);
  //$.s.a('b4', [0,0.0897,0.9729,0.1514,0.7771,0.6074,,0.3006,0.9111,,,0.232,,0.8576,-0.193,0.6595,0.0443,-0.2262,0.3791,-0.0462,,0.0012,-0.0822,0.28]);
  //$.s.a('b5', [2,0.5118,0.5396,0.2344,0.0218,0.4481,,0.0003,0.8822,,,-0.7807,0.1024,,0.3144,0.8573,-0.0234,-0.3532,0.3484,-0.0216,0.2002,0.7388,0.0003,0.33]);
  //$.s.a('b6', [2,0.6502,0.0578,0.1576,0.8114,0.6487,,0.0119,0.0109,0.2188,0.9252,-0.4009,,,0.4876,,-0.4963,0.0723,0.9595,0.1278,,0.4881,0.0167,0.3]);
  //$.s.a('b7', [0,0.5891,0.445,0.002,0.7999,0.24,,0.0006,-0.0051,-0.9503,0.0566,0.3562,,0.1992,,0.3551,0.2477,0.0299,0.8817,,,0.0074,0.1778,0.16]);

  //// Raibow
  ////$.s.a('rb', [2,0.0011,0.4012,0.0045,0.454,0.4418,,0.0677,-0.2605,0.0059,0.6015,0.9339,0.4048,0.8791,-0.0004,-0.8487,0.9497,0.0279,0.3169,0.2484,0.6989,0.0055,-0.1299,0.5]);
  //$.s.a('rb', [2,0.1327,0.22,0.19,0.3846,0.78,,0.28,-0.12,,,0.4599,,0.8248,-0.0232,0.4414,-0.0004,0.5222,0.9392,-0.0046,0.9288,0.1549,0.0534,0.5]);

  // Loading Scenes
  $.scn.menu = new MenuScene();
  $.scn.game = new GameScene();

  $.scn.menu.loop();
};
