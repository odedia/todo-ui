allow_k8s_contexts('tap-cluster')
load('.tanzu/tanzu_tilt_extensions.py', 'tanzu_k8s_yaml')

SOURCE_IMAGE = os.getenv("SOURCE_IMAGE", default='harbor.apps.cf.tanzutime.com/apps/todo-ui')
LOCAL_PATH = os.getenv("LOCAL_PATH", default='./dist')

custom_build('harbor.apps.cf.tanzutime.com/apps/todo-ui',
    "npm install && npm run build  && \
    tanzu apps workload apply -f config/workload.yaml --live-update \
      --local-path " + LOCAL_PATH + " --source-image " + SOURCE_IMAGE + " --yes && \
    .tanzu/wait.sh todo-ui",
  ['.'],
  live_update = [
    sync('./dist', '/workspace')
  ],
  skips_local_docker=True
)

tanzu_k8s_yaml('todo-ui', 'harbor.apps.cf.tanzutime.com/apps/todo-ui', './config/workload.yaml')
