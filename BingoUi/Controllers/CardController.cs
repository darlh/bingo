using System.Threading.Tasks;
using BingoService.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bingo.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly ICardService _cardService;
        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id) => await GetNewGame(id);

        private async Task<IActionResult> GetNewGame(long id)
        {
            return Ok(await _cardService.GetRandomGameCardById(id));
        }

    }
}