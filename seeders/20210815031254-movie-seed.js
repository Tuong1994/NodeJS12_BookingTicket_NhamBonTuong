"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          id: 1,
          tenPhim: "Zack Snyder's Justice League",
          biDanh: "Justice League",
          trailer: "https://www.youtube.com/watch?v=ZrdQSAX2kyw",
          hinhAnh: "jl.png", 
          moTa: "Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with a vast army to subjugate humans.",
          ngayKhoiChieu: "2021-03-08",
          danhGia: "8",
          thoiLuong: "230 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          tenPhim: "Avenger: Endgame",
          biDanh: "Avenger",
          trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
          hinhAnh: "avenger.png", 
          moTa: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
          ngayKhoiChieu: "2019-04-22",
          danhGia: "9",
          thoiLuong: "180 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          tenPhim: "Godzilla vs KingKong",
          biDanh: "GvK",
          trailer: "https://www.youtube.com/watch?v=odM92ap8_c0",
          hinhAnh: "godzillaVSkingkong.png", 
          moTa: "King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.",
          ngayKhoiChieu: "2021-03-26",
          danhGia: "9",
          thoiLuong: "180 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          tenPhim: "The Conjuring 3",
          biDanh: "Conjuring",
          trailer: "https://www.youtube.com/watch?v=h9Q4zZS2v1k",
          hinhAnh: "conjuring3.png", 
          moTa: "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they've ever seen before.",
          ngayKhoiChieu: "2021-03-27",
          danhGia: "8",
          thoiLuong: "150 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          tenPhim: "Fast and Furious 9",
          biDanh: "F9 Saga",
          trailer: "https://www.youtube.com/watch?v=PglP2X5tqzE",
          hinhAnh: "f9.png", 
          moTa: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.",
          ngayKhoiChieu: "2021-04-01",
          danhGia: "8",
          thoiLuong: "180 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          tenPhim: "Free Guy",
          biDanh: "Free Guy 2021",
          trailer: "https://www.youtube.com/watch?v=X2m-08cOAbc",
          hinhAnh: "freeguy.png", 
          moTa: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
          ngayKhoiChieu: "2021-08-13",
          danhGia: "8",
          thoiLuong:  "170 mins",          
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          tenPhim: "Snake Eyes",
          biDanh: "Snake Eyes 2021",
          trailer: "https://www.youtube.com/watch?v=Vd2sm63Xwfw",
          hinhAnh: "snakeeyes.png", 
          moTa: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
          ngayKhoiChieu: "2021-07-22",
          danhGia: "8",
          thoiLuong: "185 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          tenPhim: "Harry Potter and The Deathly Hallows Part 2",
          biDanh: "Harry Potter 7",
          trailer: "https://www.youtube.com/watch?v=5NYt1qirBWg",
          hinhAnh: "harrypotter7.png", 
          moTa: "Harry, Ron and Hermione race against time to destroy the remaining Horcruxes. Meanwhile, the students and teachers unite to defend Hogwarts against Lord Voldemort and the Death Eaters.",
          ngayKhoiChieu: "2011-07-07",
          danhGia: "9",
          thoiLuong: "180 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          tenPhim: "John Wick: Chapter 3 – Parabellum",
          biDanh: "John Wick 3",
          trailer: "https://www.youtube.com/watch?v=pU8-7BX9uxs",
          hinhAnh: "johnwick3.png", 
          moTa: "John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.",
          ngayKhoiChieu: "2019-05-09",
          danhGia: "9",
          thoiLuong: "150 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          tenPhim: "The Batman",
          biDanh: "The Batman 2021",
          trailer: "https://www.youtube.com/watch?v=U3olJWzIKvY",
          hinhAnh: "thebatman.png", 
          moTa: "The Riddler plays a deadly game of cat and mouse with Batman and Commissioner Gordon in Gotham City.",
          ngayKhoiChieu: "2022-03-04",
          danhGia: "8",
          thoiLuong: "190 mins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Movies', null, {});
  },
};
