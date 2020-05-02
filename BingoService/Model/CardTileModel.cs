using System;
using System.Collections.Generic;
using System.Text;

namespace BingoService.Model
{
    public class CardTileModel
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public int XCoordinate { get; set; }
        public int YCoordinate { get; set; }
    }
}
