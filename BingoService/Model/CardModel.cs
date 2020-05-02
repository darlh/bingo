using System;
using System.Collections.Generic;
using System.Text;

namespace BingoService.Model
{
    public class CardModel
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public ICollection<CardTileModel> Tiles { get; set; }
    }
}
