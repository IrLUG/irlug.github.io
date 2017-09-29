import subprocess
import tempfile
import shutil


REPO = 'IrLUG/irlug.github.io'


if __name__ == '__main__':
    subprocess.call('rm -r _site/', shell=True)
    subprocess.call('jekyll build', shell=True)
    temp_dir = tempfile.mkdtemp()

    print('temp_dir', temp_dir)

    subprocess.call('cp -r _site/* ' + temp_dir, shell=True)

    subprocess.call('git init', shell=True, cwd=temp_dir)
    subprocess.call('git remote add origin git@github.com:' + REPO + '.git', shell=True, cwd=temp_dir)

    subprocess.call('git add .', shell=True, cwd=temp_dir)
    subprocess.call('git commit -m "Update site"', shell=True, cwd=temp_dir)

    subprocess.call('git fetch origin', shell=True, cwd=temp_dir)
    subprocess.call('git push -f origin gh-pages', shell=True, cwd=temp_dir)

    shutil.rmtree(temp_dir)
