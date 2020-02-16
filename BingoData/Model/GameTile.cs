using System;
using System.Collections.Generic;

namespace BingoData.Model
{
    public partial class GameTile
    {
        public long Id { get; set; }
        public long GameBoardId { get; set; }
        public string Content { get; set; }

        public virtual GameBoard GameBoard { get; set; }
    }
}
