<?php
/*
Plugin Name: Easify Vocab Game (TESTE)
Description: Jogo de vocabulário em inglês com PixiJS.
Version: 1.0
Author: Dener Emanuel dos Santos
*/

function easify_vocab_game_scripts() {
  // Carrega PixiJS (usando CDN para teste)
  wp_enqueue_script(
    'pixijs', // Nome do script
    'https://pixijs.download/v7.2.4/pixi.min.js', // CDN do PixiJS
    array(), // Dependências (nenhuma)
    '7.2.4', // Versão
    true // Carrega no footer (melhor para performance)
  );

  // Carrega o arquivo JavaScript do jogo
  wp_enqueue_script(
    'easify-game', // Nome do script
    plugins_url('src/app/GerenciadorDoJogo.js', __FILE__), // Caminho do arquivo
    array('pixijs'), // Dependência: PixiJS precisa carregar antes
    '1.0', // Versão
    true // Carrega no footer
  );

  // Define type="module" no game.js
  add_filter('script_loader_tag', function($tag, $handle) {
    if ($handle === 'easify-game') {
      return str_replace('<script ', '<script type="module" ', $tag);
    }
    return $tag;
  }, 10, 2);
}
add_action('wp_enqueue_scripts', 'easify_vocab_game_scripts');

function easify_game_shortcode() {
  // Retorna a div onde o PixiJS vai renderizar o jogo
  return '<div id="game-container" style="width: 820px; height: 550px; margin: 0 auto; background-color: gray; border-radius: 40px"></div>';
}
add_shortcode('easify_game(TESTE)', 'easify_game_shortcode');

// Impede acesso direto ao arquivo
if (!defined('ABSPATH')) {
  exit;
}