<template>
  <div class="page-indexlist">
    <h1 class="page-title">Index List</h1>
    <p class="page-indexlist-desc">此例请使用手机查看</p>
    <div class="page-indexlist-wrapper">
      <yz-index-list>
        <yz-index-section v-for="item in alphabet" :index="item.initial">
          <yz-cell v-for="cell in item.cells" :title="cell"></yz-cell>
        </yz-index-section>
      </yz-index-list>
    </div>
  </div>
</template>

<style>
  .page-indexlist-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
  }
  .page-indexlist-wrapper{
    width: 100%;
    border-top: solid 1px #ddd;
  }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
