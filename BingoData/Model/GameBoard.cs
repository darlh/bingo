using System.Collections.Generic;

namespace BingoData.Model
{
    public partial class GameBoard
    {
        public GameBoard()
        {
            GameTile = new HashSet<GameTile>();
        }

        public long Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public bool IsPublic { get; set; }

        public virtual ICollection<GameTile> GameTile { get; set; }
    }
}
