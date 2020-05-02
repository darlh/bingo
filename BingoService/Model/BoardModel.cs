using System.Collections.Generic;

namespace BingoService.Model
{
    public class BoardModel
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public ICollection<BoardTileModel> Tiles { get; set; }
    }
}
