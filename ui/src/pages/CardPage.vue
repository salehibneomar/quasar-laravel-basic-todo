<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Card Test</div>
    <div class="row q-col-gutter-md">
      <div class="col-md-3 col-sm-6">
        <q-card class="q-px-md q-py-md"> Normal Card </q-card>
      </div>
      <div class="col-md-3 col-sm-6">
        <q-card class="q-px-md q-py-md">
          <q-card-section>
            <div class="text-h6">Card header</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum labore,
            impedit eligendi delectus veritatis amet aut eveniet fuga quam.
          </q-card-section>
          <q-card-actions>
            <q-btn color="red" flat dense>Read More</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6">
        <q-card class="q-px-md q-py-md">
          <q-card-section>
            <div class="text-h6">Card header</div>
            <div class="text-caption">This is caption</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum labore,
            impedit eligendi delectus veritatis amet aut eveniet fuga quam.
          </q-card-section>
          <q-card-actions>
            <q-btn color="red" flat dense>Read More</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6">
        <q-card class="q-px-md q-py-md">
          <q-card-section>
            <div class="text-h6">Card header</div>
            <div class="text-caption">This is caption</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum labore,
            impedit eligendi delectus veritatis amet aut eveniet fuga quam.
          </q-card-section>
          <q-separator inset />
          <q-card-actions>
            <q-btn color="red" flat dense>Read More</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-md-3 col-sm-6">
        <q-card flat bordered>
          <q-card-section>
            <div class="row">
              <div class="col-9">
                <div class="text-h6">Lorem ipsum dolor sit amet...</div>
                <div class="text-subtitle2">Saleh</div>
              </div>
              <div class="col-3">
                <q-btn class="float-right" icon="more_vert" round flat dense />
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam amet labore iure
            quod veritatis veniam quibusdam iusto modi praesentium obcaecati.
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn color="red" flat dense>Read More</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-md-3 col-sm-6">
        <q-card>
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-right text-h6">Title</div>
          </q-img>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus unde, placeat
            quas itaque earum exercitationem!
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-3 col-sm-6">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id et est fugit iste dolorem
              veritatis consequuntur tempora illum tempore optio.
            </q-card-section>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-5 col-sm-6">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <q-card-section class="q-py-none">
                  <div class="text-overline">Overline</div>
                </q-card-section>
              </div>
              <div class="col-8">
                <q-card-section class="q-py-none">
                  <div class="text-h6">Header</div>
                </q-card-section>
                <q-card-section>
                  <div class="text-caption text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam nam
                    placeat autem minima rem sunt saepe consequuntur ab? Adipisci?
                  </div>
                </q-card-section>
              </div>
              <div class="col-4">
                <q-card-section>
                  <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
                </q-card-section>
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-card-section class="q-py-none">
              <q-btn label="Click" flat dense />
            </q-card-section>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
