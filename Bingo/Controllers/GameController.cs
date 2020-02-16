using System.Threading.Tasks;
using AutoMapper;
using BingoService.Interface;
using Microsoft.AspNetCore.Mvc;

namespace BingoApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : Controller
    {
        private readonly IGameService _gameService;
        private readonly IMapper _mapper;
        public GameController(IGameService gameService, IMapper mapper)
        {
            _gameService = gameService;
            _mapper = mapper;
        }
        [HttpGet("gameBoard/{id}")]
        public async Task<IActionResult> Get(long id) => await GetNewGame(id);

        private async Task<IActionResult> GetNewGame(long id)
        {
            return Ok(await _gameService.GetGameBoardById(id));
        }

    }
}