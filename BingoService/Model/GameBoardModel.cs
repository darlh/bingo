using System.Collections.Generic;

namespace BingoService.Model
{
    public class GameBoardModel
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public ICollection<TileModel> Tiles { get; set; }
    }
}
